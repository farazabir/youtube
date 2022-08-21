import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const Areachart = () => {

    //data 
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
      <h1>Area Chart</h1>
        <ResponsiveContainer width="100%" aspect={3} >
         <AreaChart   width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 80,
            left: 0,
            bottom: 0,
          }}>
            <CartesianGrid   strokeDasharray="5 5"/>
            <XAxis dataKey="name"/>
            <YAxis />
            <Tooltip/>
            <Legend/>
          <Area type="monotone" dataKey="income" stackId="1" stroke="#002B5B" fill="#002B5B" />
         </AreaChart>
        </ResponsiveContainer>  
    </div>
  )
}

export default Areachart