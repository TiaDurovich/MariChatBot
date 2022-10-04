// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";

const botName = 'the Marist College NCEA Chatbot'

const config = {
  initialMessages: [createChatBotMessage(`Hello! I'm ${botName}`)],
  botName: botName,
}

export default config;