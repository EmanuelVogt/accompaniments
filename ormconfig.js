export default {
  type: 'expo',
  database: 'sr-campo.db',
  driver: require('expo-sqlite'),
  migrationsRun: true,

  synchronize: false,
  entities: ['src/database/entities'],
  migrations: ['src/database/migrations/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/database/entities',
    migrationsDir: 'src/database/migrations'
  }
}
