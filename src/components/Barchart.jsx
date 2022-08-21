import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Barchart = () => {
      
      const data = [
        {
          name:'a',
          income: 20,
          worktime: 3 
        },
        {
          name:'b',
          income: 30,
          worktime: 2
        },
        {
        name:'c',
        income: 40,
        worktime: 5
        },
        {
          name:'e',
          income: 70,
          worktime: 8
        },
        {
          name:'f',
          income: 80,
          worktime: 9
        },
        {
          name:'g',
          income: 20,
          worktime: 4
        },
        {
          name:'h',
          income: 40,
          worktime: 3
        },
        {
          name:'i',
          income: 90,
          worktime: 5
        },
        {
          name:'j',
          income:10,
          worktime: 2
        }
      ]
  return (
    <div>
        <h1>Bar Chart</h1>
        <ResponsiveContainer width="100%" aspect={3}>
            <BarChart width={500} height={300} data={data} margin={{
                top:10,
                right:80,
                left:20,
                bottom:10
            }}>
                <CartesianGrid/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey="income" fill='#00ADB5' />
                <Bar dataKey="worktime" fill='#222831' />

            </BarChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Barchart