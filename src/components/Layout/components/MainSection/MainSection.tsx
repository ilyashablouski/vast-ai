import { Card, Container, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { configs } from '@/mock/configurations.ts';

const MainSection = () => {
  return (
    <Container sx={{ mt: 6 }}>
      <Typography variant="h4">Available Configurations</Typography>

      <Stack spacing={3}>
        {configs.map((config) => (
          <Card sx={{ p: 3, minHeight: '111px' }}>
            <Stack direction="row" spacing={7} justifyContent="space-between">
              <Stack>
                <Typography mb={2}>{config.general.name}</Typography>
                <Typography mt="auto">{config.general.place}</Typography>
              </Stack>

              <Stack whiteSpace="pre">
                <Typography mb={1}>CPU:</Typography>
                <Typography mt="auto">{config.cpu.model}</Typography>
              </Stack>

              <Stack whiteSpace="pre">
                <Typography mb={1}>Storage:</Typography>
                <Typography mt="auto">{config.storage.model}</Typography>
              </Stack>

              <Stack whiteSpace="pre">
                <Typography mb={1}>Connection:</Typography>
                <Stack mt="auto" spacing="4px">
                  <Typography>{config.connection.upload}</Typography>
                  <Typography>{config.connection.download}</Typography>
                </Stack>
              </Stack>

              <Stack width="160px">
                <Typography mb={1.5} textAlign="right">
                  $&nbsp;{config.rent}/hr
                </Typography>
                <Button variant="contained" size="small" sx={{ mt: 'auto' }}>
                  Rent
                </Button>
              </Stack>
            </Stack>
          </Card>
        ))}
      </Stack>
    </Container>
  );
};

export default MainSection;
