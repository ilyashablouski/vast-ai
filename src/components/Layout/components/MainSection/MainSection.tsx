import { Card, Container, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ArrowUp as ArrowUpIcon } from '@/components/icons';
import { ArrowDown as ArrowDownIcon } from '@/components/icons';
import { Geo as GeoIcon } from '@/components/icons';

import { configs } from '@/mock/configurations.ts';
import useGlobalContext from '@/store/context.tsx';

const MainSection = () => {
  const { toggleModal } = useGlobalContext();

  return (
    <Container sx={{ mt: 6, pb: 6 }} maxWidth="lg">
      <Typography variant="h1" mb={4}>
        Available Configurations
      </Typography>

      <Stack
        spacing={3}
        sx={{
          overflowX: 'scroll',
          maxWidth: '100%',
        }}
      >
        {configs.map((config, index) => (
          <Card
            sx={{
              p: 3,
              minWidth: '840px',
              maxWidth: '100%',
            }}
            key={index}
          >
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" spacing={{ xs: 4, lg: 7 }} justifyContent="space-between">
                <Stack width="147px">
                  <Typography variant="h2" mb={2} sx={{ whiteSpace: 'nowrap' }}>
                    {config.general.name}
                  </Typography>

                  <Stack mt="auto" direction="row" alignItems="center">
                    <GeoIcon sx={{ mr: 0.5 }} />
                    <Typography sx={{ whiteSpace: 'nowrap' }}>{config.general.place}</Typography>
                  </Stack>
                </Stack>

                <Stack width="160px" whiteSpace="pre">
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

                <Stack width="160px" whiteSpace="pre">
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

                <Stack width={{ xs: '110px', lg: '160px' }} whiteSpace="pre">
                  <Typography variant="h3" sx={{ mb: 1, opacity: 0.5 }}>
                    Connection:
                  </Typography>

                  <Stack mt="auto" spacing="4px">
                    <Stack direction="row" alignItems="center" color="info.main">
                      <ArrowUpIcon sx={{ mr: 0.5 }} />
                      <Typography>{config.connection.upload}&nbsp;Mbps</Typography>
                    </Stack>

                    <Stack direction="row" alignItems="center" color="success.main">
                      <ArrowDownIcon sx={{ mr: 0.5 }} />
                      <Typography>{config.connection.download}&nbsp;Mbps</Typography>{' '}
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>

              <Stack ml={4} width="160px">
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
