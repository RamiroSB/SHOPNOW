import React from 'react'
import { FlexBody } from '../FlexBody/FlexBody';
import { FlexEnvios } from '../FlexEnvios/FlexEnvios';
import { BannerBody } from '../BannerBody/BannerBody';
import { GridBody } from '../GridBody/GridBody';

export const HomePage = () => {
  return (
    <>
        <FlexEnvios/>
        <FlexBody/>
        <BannerBody/>
        <GridBody/>
    </>
  )
}
