"use client";

import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SpaFinder() {

    console.log("SPA FINDER PAGE RENDERED");    
  return (
    <div className="bg-black min-h-screen">
      {/* HERO SECTION */}
      <Box className="bg-black py-16 text-center">
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            find your nearest spa For ultimate relaxation
          </Typography>

          <Typography variant="body1" color="text.secondary">
            Your journey to wellbeing starts here.
          </Typography>

          {/* SEARCH BAR */}
          <Box className="flex justify-center mt-8 gap-3">
            <TextField
              placeholder="Enter suburb or postcode"
              variant="outlined"
              size="small"
              className="bg-white w-[400px]"
            />

            <Button
              variant="contained"
              startIcon={<SearchIcon />}
              sx={{
                backgroundColor: "#2e4f3e",
                borderRadius: "30px",
                px: 4,
              }}
            >
              search
            </Button>
          </Box>
        </Container>
      </Box>

      {/* HOW TO BOOK SECTION */}
      <Container className="py-20 flex  items-center flex-col" >
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          gutterBottom
        >
          how to book an appointment
        </Typography>

        <Grid container spacing={6} className="mt-8">
          {/* LEFT IMAGE
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/spa-device.png"
              alt="spa booking"
              className="w-full rounded-lg shadow-lg"
            />
          </Grid> */}

          {/* RIGHT CONTENT */}
          <Grid item xs={12} md={6}>
            <Box className="space-y-6">
              <Card elevation={0}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    1. find a spa
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    Use the spa finder above to find your preferred spa location
                  </Typography>
                </CardContent>
              </Card>

              <Card elevation={0}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    2. select your treatment
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    Click "book a treatment" to choose from our range of
                    nourishing facials, massages and spa packages
                  </Typography>
                </CardContent>
              </Card>

              <Card elevation={0}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    3. choose your therapist & appointment time
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    Pick your favourite therapist and select an available
                    timeslot that fits your schedule
                  </Typography>
                </CardContent>
              </Card>

              <Card elevation={0}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    4. confirm your booking
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    Fill in your details and confirm your appointment
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}