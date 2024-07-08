import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

export default function Players() {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Players</Typography>
      </Grid>
    </Grid>
  );
}
