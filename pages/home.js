import React, { useState } from 'react'
import { useEffect } from 'react';
import Table from '../src/components/shared/Table';
import useFetch from '../src/hooks/useFetch'
import HomeStyled from '../src/styles/HomeStyled';

export default function home() {

  
  
  const [theme, setTheme] = useState(0);
  
  useEffect(()=>{
    setTheme(parseInt(localStorage.getItem("mode")) || 0)
  }, [])

  const data = [
    {
        coin: "Bitcoin",
        symbol: "BTC",
        price: "$20.70394"
    },     
    {
        coin: "Bitcoin",
        symbol: "BTC",
        price: "$20.70394"
    }, 
    {
        coin: "Bitcoin",
        symbol: "BTC",
        price: "$20.70394"
    }, {
        coin: "Bitcoin",
        symbol: "BTC",
        price: "$20.70394"
    }, 
    {
        coin: "Bitcoin",
        symbol: "BTC",
        price: "$20.70394"
    }, 
    {
        coin: "Bitcoin",
        symbol: "BTC",
        price: "$20.70394"
    }, 
    {
        coin: "Bitcoin",
        symbol: "BTC",
        price: "$20.70394"
    }, 
    {
        coin: "Bitcoin",
        symbol: "BTC",
        price: "$20.70394"
    }, 
    {
        coin: "Bitcoin",
        symbol: "BTC",
        price: "$20.70394"
    }, 
    {
        coin: "Bitcoin",
        symbol: "BTC",
        price: "$20.70394" 
    }, 
    {
        coin: "Bitcoin",
        symbol: "BTC",
        price: "$20.70394"
    }, 
    {
        coin: "Bitcoin",
        symbol: "BTC",
        price: "$20.70394"
    }, 

  ]  
  return ( 
    <HomeStyled>
        <Table data={data}  theme={theme} />
    </HomeStyled>
  )
}
