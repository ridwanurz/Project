export const packages = [
  {
    id: 'harian',
    name: 'Sewa Harian',
    tagline: 'Untuk syuting satu hari atau event singkat',
    price: '350.000',
    unit: 'mulai / hari',
    minOrder: 'Minimum 1 unit',
    features: [
      '1 body + 1 lensa (pilihan Anda)',
      'Baterai, charger, dan tas',
      '1 kartu memori 128GB',
      'Checklist serah terima unit',
      'Support WA selama masa sewa',
    ],
    popular: false,
  },
  {
    id: 'mingguan',
    name: 'Sewa Mingguan',
    tagline: 'Untuk produksi multi hari dan proyek',
    price: '1.900.000',
    unit: 'mulai / 7 hari',
    minOrder: 'Minimum 2 unit',
    features: [
      '2 body + 2 lensa premium',
      'Lighting & audio set lengkap',
      'Operator opsional, bebas request',
      'Dukungan teknis prioritas',
      'Diskon 15% untuk sewa 7 hari',
    ],
    popular: true,
  },
  {
    id: 'bulanan',
    name: 'Sewa Bulanan',
    tagline: 'Untuk production house dan tim kreatif',
    price: '5.500.000',
    unit: 'mulai / 30 hari',
    minOrder: 'Minimum 3 unit',
    features: [
      '3 body + 1 cinema camera',
      'Drone & lighting set',
      'Ekstensi gratis 3 hari',
      'Maintenance & servis rutin',
      'Harga paling kompetitif',
    ],
    popular: false,
  },
]

export const extras = [
  { name: 'Operator / SP', price: '450.000', unit: 'per hari' },
  { name: 'Drone aerial shot', price: '1.100.000', unit: 'per sesi' },
  { name: 'Light studio 3x3m', price: '175.000', unit: 'per hari' },
  { name: 'Green screen + tripod set', price: '225.000', unit: 'per hari' },
  { name: 'Transfer data & rushes 4K', price: '75.000', unit: 'per hari' },
  { name: 'Asisten produksi', price: '350.000', unit: 'per hari' },
]
