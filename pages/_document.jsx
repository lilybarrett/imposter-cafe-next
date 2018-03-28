import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { extractCritical } from "emotion-server";
import NavBar from "../components/nav-bar";

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const page = renderPage()
    const styles = extractCritical(page.html)
    return { ...page, ...styles }
  }

  constructor (props) {
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = ids
    }
  }

  render () {
    return (
      <html>
        <Head>
          <title>Imposter Cafe</title>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <NavBar />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}