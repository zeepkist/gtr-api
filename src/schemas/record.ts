import { PaginatedResponse } from './generic.js'
import { Level } from './level.js'
import { User } from './user.js'

export interface Record {
  id: number
  dateCreated: string
  time: number
  splits: number[]
  ghostUrl: string
  screenshotUrl: string
  isBest: boolean
  isValid: boolean
  isWorldRecord: boolean
  gameVersion: string
  user: User
  level: Level
}

export interface RecordsResponse extends PaginatedResponse {
  records: Record[]
}

export interface RecentRecordsResponse {
  records: Record[]
}