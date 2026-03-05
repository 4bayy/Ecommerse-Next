type BlogPostProps ={
    params:{
        slug : string
    }
}


export default function BlogPost({params}: BlogPostProps) {  
    console.log(params);
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold">Blog Post Single Page: {params.slug}</h1>
        </div>
    );

}