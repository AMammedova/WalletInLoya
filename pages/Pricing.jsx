import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import Pricing from './../src/Pricing/Pricing'

export default function index() {
    return (
        <Layout>
            <Pricing />
        </Layout>
    )
}