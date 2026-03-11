import { NextResponse } from 'next/server'; 
import dbConnect from '@/lib/mongodb';
import { Import } from 'lucide-react';
import Treatment from '@/models/treatment';

export async function GET() {
    try {
        
        await dbConnect();
        const treatments = await Treatment.find({});
        return NextResponse.json({ message: "Treatments fetched successfully", treatments }, { status: 200 });


    } catch (error) {
        console.error('Error fetching treatments:', error);
        return NextResponse.json({ error: 'Failed to fetch treatments' }, { status: 500 });
    }
}


export async function POST(request: Request) {
    try {
        const { name, description, price, category } = await request.json();
        
        await dbConnect();
        const newTreatment = new Treatment({ name, description, price, category });
        
        const treatment = await Treatment.create(newTreatment);

        return NextResponse.json({ message: "Treatment created successfully", treatment }, { status: 201 });

    } catch (error) {
        console.error('Error creating treatment:', error);
        return NextResponse.json({ error: 'Failed to create treatment' }, { status: 500 });
    }
}