import React, { useState } from 'react'
import styled from './weather.module.css'

import RainIcon from '../icons/weather/rain'
import WindIcon from '../icons/weather/windy'
import Cloudy from '../icons/weather/cloudy'

export default function WeatherApp() {
  const [currentWeather, setCurrentWeather] = useState({
    observationTime: '2020-12-12 22:10:00',
    locationName: '臺北市',
    description: '多雲時晴',
    windSpeed: 3.6,
    temperature: 32.1,
    rainPossibility: 60,
  })

  //取得天氣api資料

  const handleClick = () => {
    fetch(
      'https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-B9D2C9D2-C8B6-48CD-81BE-33DE1E64BB1A&locationName=%E8%87%BA%E5%8C%97'
    ) // 向 requestURL 發送請求
      .then((response) => response.json()) // 取得伺服器回傳的資料並以 JSON 解析
      // 取得解析後的 JSON 資料
      .then((data) => {
        console.log('data', data)
        const locationData = data.records.location[0]

        const weatherElements = locationData.weatherElement.reduce(
          (neededElements, v) => {
            if (['WDSD', 'TEMP'].includes(v.elementName)) {
              neededElements[v.elementName] = v.elementValue
            }
            return neededElements
          },
          {}
        )

        setCurrentWeather({
          observationTime: locationData.time.obsTime,
          locationName: locationData.locationName,
          description: '多雲時晴',
          windSpeed: weatherElements.WDSD,
          temperature: weatherElements.TEMP,
          rainPossibility: 60,
        })
      })
  }

  return (
    <>
      <div className={styled.container}>
        <div className={styled.weatherCard}>
          <div className={styled.location}>{currentWeather.locationName}</div>
          <div className={styled.description}>{currentWeather.description}</div>
          <Cloudy />
          <div className={styled.currentWeather}>
            <div className={styled.tempature}>
              {currentWeather.temperature}
              <div className={styled.celsius}>°C</div>
            </div>
          </div>
          <div className={styled.airFlow}>
            <WindIcon />
            {currentWeather.windSpeed}
          </div>
          <div className={styled.rain}>
            <RainIcon />
            {currentWeather.rainPossibility}
          </div>
          <div className={styled.observationTime}>
            {currentWeather.observationTime}
            <br />
            <button onClick={handleClick}>更新</button>
          </div>
        </div>
      </div>
    </>
  )
}
