import React from "react"
import App from "next/app"
import Home from "."
import "../styles/global.css"

class MyApp extends App {
    render(){
        return <Home />
    }
}
export default MyApp