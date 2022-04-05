import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { Connection } from 'typeorm'

import { DatabaseRepository } from '../../repositories/Database'
import { ImagesRepository } from '../../repositories/ImagesRepository'
import { DatabaseProvider } from './database'
interface DatabaseConnectionContextData {
  imagesRepository: ImagesRepository
  database: DatabaseRepository
}

const DatabaseConnectionContext = createContext<DatabaseConnectionContextData>(
  {} as DatabaseConnectionContextData
)

export const DatabaseConnectionProvider: React.FC = ({ children }) => {
  const [connection, setConnection] = useState<Connection | null>(null)
  const databaseProvider = new DatabaseProvider(connection)

  const connect = useCallback(async () => {
    const createdConnection = await databaseProvider.createConnection()

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
        imagesRepository: new ImagesRepository(connection),
        database: new DatabaseRepository(connection)
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
