import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";

export interface messageData {
  userId: number | string
  text: string
  first_name: string
  last_name: string
  messageId: number | string
  isLeft: boolean
  date: string
}

const messageSlice = createSlice({
  name: "message",
  initialState: {
    message: [{
      userId: 0,
      text: 'Привет!',
      first_name: 'string',
      last_name: 'string',
      messageId: 0,
      isLeft: true,
      date: moment().format('h:mm')
    }] as messageData[]
  
  },
  reducers: {
    setMessage(state, action: PayloadAction<any>) {
      state.message.push(action.payload)
    },
    clearMessage(state) {
    state.message = [{
      userId: 0,
      text: 'Привет!',
      first_name: 'string',
      last_name: 'string',
      messageId: 0,
      isLeft: true,
      date: moment().format('h:mm')
    }]
      },
  }
})

export const { setMessage } = messageSlice.actions
export const { clearMessage } = messageSlice.actions
export default messageSlice.reducer