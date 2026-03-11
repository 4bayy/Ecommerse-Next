"use client"

import { useEffect } from "react"
import { Button, Container, Typography } from "@mui/material"

export default function AdminError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <Container sx={{ textAlign: "center", mt: 10 }}>
      <Typography variant="h4" gutterBottom>
        Something went wrong
      </Typography>

      <Typography color="text.secondary">
        {error.message}
      </Typography>

      <Button
        variant="contained"
        sx={{ mt: 3 }}
        onClick={() => reset()}
      >
        Try Again
      </Button>
    </Container>
  )
}