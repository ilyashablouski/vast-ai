import { Card, Container, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { configs } from '@/mock/configurations.ts';
import useGlobalContext from '@/store/context.tsx';

const MainSection = () => {
  const { toggleModal } = useGlobalContext();

  return (
    <Container sx={{ mt: 6 }}>
      <Typography variant="h4" mb={4}>
        Available Configurations
      </Typography>

      <Stack spacing={3}>
        {configs.map((config, index) => (
          <Card sx={{ p: 3, minHeight: '111px' }} key={index}>
            <Stack direction="row" spacing={7} justifyContent="space-between">
              <Stack>
                <Typography mb={2}>{config.general.name}</Typography>
                <Typography mt="auto">{config.general.place}</Typography>
              </Stack>

              <Stack whiteSpace="pre">
                <Typography mb={1}>CPU:</Typography>
                <Stack mt="auto">
                  <Typography>{config.cpu.model}</Typography>
                  <Stack direction="row" spacing={1}>
                    <Typography>{config.cpu.info[0]}</Typography>
                    <Typography>{config.cpu.info[1]}</Typography>
                  </Stack>
                </Stack>
              </Stack>

              <Stack whiteSpace="pre">
                <Typography mb={1}>Storage:</Typography>
                <Stack mt="auto">
                  <Typography>{config.storage.model}</Typography>
                  <Stack direction="row" spacing={1}>
                    <Typography>{config.storage.info[0]}</Typography>
                    <Typography>{config.storage.info[1]}</Typography>
                  </Stack>
                </Stack>
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
                <Button
                  variant="contained"
                  size="small"
                  sx={{ mt: 'auto' }}
                  onClick={() => toggleModal(true)}
                >
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
