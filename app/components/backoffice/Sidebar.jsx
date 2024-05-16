"use client";

import React from 'react';
import Link from 'next/link';


export default function Sidebar() {
  return (
    <div className='bg-slate-800 -space-y-6 w-52'>
        <Link href='/'>Logo</Link>
        <div className='space-y-3'>
            <Link href='/dashboard'>Dashboard</Link>
            <Link href='/catalogue'>Catalogue</Link>
            <Link href='/customers'>Customers</Link>
            <Link href='/markets'>Markets</Link>
            <Link href='/farmers'>farmers</Link>
            <Link href='/orders'>Orders</Link>
            <Link href='/staff'>Staff</Link>
            <Link href='/settings'>Settings</Link>
            <Link href='/store'>Online Store</Link>
        </div>
      
    </div>
  )
}
