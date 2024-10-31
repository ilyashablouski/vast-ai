export const configs = [
  {
    general: {
      name: '2x H100 SXM',
      place: 'Thailand, TH',
    },
    cpu: {
      model: 'AMD EPYC 9124',
      info: ['32.0/64 cpu', '257/516 GB'],
    },
    storage: {
      model: 'nvme',
      info: ['2429 MB/s', '37.0 GB'],
    },
    connection: {
      upload: '4292',
      download: '7592',
    },
    rent: '4.271',
  },
  {
    general: {
      name: '2x A100 PCIE',
      place: 'Quebec, CA',
    },
    cpu: {
      model: 'AMD EPYC 9554',
      info: ['63.0/252 cpu', '242/967 GB'],
    },
    storage: {
      model: 'nvme',
      info: ['4096 MB/s', '999.7 GB'],
    },
    connection: {
      upload: '6953',
      download: '8254',
    },
    rent: '2.138',
  },
  {
    general: {
      name: '1x RTX 4080S',
      place: 'Quebec, CA',
    },
    cpu: {
      model: 'AMD Ryzen 9 7900',
      info: ['32.0/32 cpu', '64/64 GB'],
    },
    storage: {
      model: 'Realtek RTL9210B',
      info: ['1391 MB/s', '37.0 GB'],
    },
    connection: {
      upload: '882',
      download: '875',
    },
    rent: '0.258',
  },
];
