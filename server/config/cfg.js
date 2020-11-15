import dotenv from 'dotenv'

export const PORT = process.env.PORT || 5011,
    M_DB_URL = process.env.M_DB_URL || "mongodb://localhost:27017/mern",
    M_OPTION = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }