import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { Connection, createConnection } from 'typeorm'

import { entities } from './entities'
import { databaseMigrations } from './migrations'
import { ImagesRepository } from './repositories/ImagesRepository'
interface DatabaseConnectionContextData {
  imagesRepository: ImagesRepository
}

const DatabaseConnectionContext = createContext<DatabaseConnectionContextData>(
  {} as DatabaseConnectionContextData
)

export const DatabaseConnectionProvider: React.FC = ({ children }) => {
  const [connection, setConnection] = useState<Connection | null>(null)

  const connect = useCallback(async () => {
    const createdConnection = await createConnection({
      type: 'expo',
      database: 'sr-campo.db',
      driver: require('expo-sqlite'),
      entities: entities(),

      migrations: databaseMigrations(),
      migrationsRun: true,

      synchronize: false
    })

    setConnection(createdConnection)
  }, [])

  useEffect(() => {
    if (!connection) {
      connect()
    }
  }, [connect, connection])

  if (!connection) {
    return <ActivityIndicator />
  }

  return (
    <DatabaseConnectionContext.Provider
      value={{
        imagesRepository: new ImagesRepository(connection)
      }}
    >
      {children}
    </DatabaseConnectionContext.Provider>
  )
}

export function useDatabaseConnection() {
  const context = useContext(DatabaseConnectionContext)

  return context
}
