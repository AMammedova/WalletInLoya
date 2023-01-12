import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import Contact from '../src/Contact/Contact'

export default function index() {
    return (
        <Layout>
            <Contact />
        </Layout>
    )
}