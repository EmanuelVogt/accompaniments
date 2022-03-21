import { format } from 'date-fns'
import React, { useState } from 'react'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

import { Container, Date, Icon } from './styles'

interface Props {
  date: string
  setDate: (date: string) => void
}
export function DatePiker({ date, setDate }: Props) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const formatDate = (date: Date) => {
    return format(date, 'dd/M/yyy - HH:mm')
  }

  const handleConfirm = (date: Date) => {
    setDate(formatDate(date))
    hideDatePicker()
  }

  return (
    <Container onPress={showDatePicker}>
      <Date>{date}</Date>
      <Icon name="calendar-alt" />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </Container>
  )
}
