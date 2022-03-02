import React from "react"
import { Breadcrumb } from "react-bootstrap"

export default function Breadcrumb ( nowUrl, nowTitle ) {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href={nowUrl}>
        {nowTitle}
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  )
}