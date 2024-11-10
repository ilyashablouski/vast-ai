import { Card, Container, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ArrowUp as ArrowUpIcon } from '@/components/icons';
import { ArrowDown as ArrowDownIcon } from '@/components/icons';

import { configs } from '@/mock/configurations.ts';
import useGlobalContext from '@/store/context.tsx';

const MainSection = () => {
  const { toggleModal } = useGlobalContext();

  return (
    <Container sx={{ mt: 6 }} maxWidth="lg">
      <Typography variant="h1" mb={4}>
        Available Configurations
      </Typography>

      <Stack spacing={3}>
        {configs.map((config, index) => (
          <Card sx={{ p: 3, minHeight: '111px' }} key={index}>
            <Stack direction="row" spacing={7} justifyContent="space-between">
              <Stack>
                <Typography variant="h2" mb={2}>
                  {config.general.name}
                </Typography>
                <Typography mt="auto">{config.general.place}</Typography>
              </Stack>

              <Stack whiteSpace="pre">
                <Typography variant="h3" sx={{ mb: 1, opacity: 0.5 }}>
                  CPU:
                </Typography>
                <Stack mt="auto">
                  <Typography>{config.cpu.model}</Typography>
                  <Stack direction="row" spacing={1}>
                    <Typography variant="body1">{config.cpu.info[0]}</Typography>
                    <Typography variant="body1">{config.cpu.info[1]}</Typography>
                  </Stack>
                </Stack>
              </Stack>

              <Stack whiteSpace="pre">
                <Typography variant="h3" sx={{ mb: 1, opacity: 0.5 }}>
                  Storage:
                </Typography>
                <Stack mt="auto">
                  <Typography>{config.storage.model}</Typography>
                  <Stack direction="row" spacing={1}>
                    <Typography>{config.storage.info[0]}</Typography>
                    <Typography>{config.storage.info[1]}</Typography>
                  </Stack>
                </Stack>
              </Stack>

              <Stack whiteSpace="pre">
                <Typography variant="h3" sx={{ mb: 1, opacity: 0.5 }}>
                  Connection:
                </Typography>
                <Stack mt="auto" spacing="4px">
                  <Typography color="info" display="inline-flex">
                    <ArrowUpIcon fontSize="inherit" sx={{ mr: 0.5 }} />
                    {config.connection.upload}&nbsp;Mbps
                  </Typography>
                  <Typography color="success" display="inline-flex">
                    <ArrowDownIcon fontSize="inherit" sx={{ mr: 0.5 }} />
                    {config.connection.download}&nbsp;Mbps
                  </Typography>
                </Stack>
              </Stack>

              <Stack width="160px">
                <Typography variant="h3" mb={1.5} textAlign="right">
                  $&nbsp;{config.rent}/hr
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ mt: 'auto' }}
                  onClick={() => toggleModal(true)}
                >
                  RENT
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
