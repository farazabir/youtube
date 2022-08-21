import React from 'react'
import { ResponsiveContainer,LineChart,Line,XAxis,YAxis, CartesianGrid,Legend,Tooltip} from 'recharts'

const Linechart = () => {
     
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
        <h1>Line Chart</h1>
        <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={data} width={500} height={300} margin={{top:5,right:80,left:10,bottom:20}}> 
        <CartesianGrid strokeDasharray="5 5"/>
        <XAxis dataKey="name"  interval={'preserveStartEnd'}/>
         <YAxis dataKey="income"/>
         <Tooltip/>
         <Legend />
          <Line dataKey="income" stroke='#00ADB5' activeDot={{r:6}}/>
          <Line dataKey="worktime" stroke='#222831' activeDot={{r:6}}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Linechart