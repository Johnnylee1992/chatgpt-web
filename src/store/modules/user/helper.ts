/*
 * @Author: 19920205lq75321. liqiang9205@126.com
 * @Date: 2023-04-27 12:33:36
 * @LastEditors: 19920205lq75321. liqiang9205@126.com
 * @LastEditTime: 2023-04-27 14:19:24
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { ss } from '@/utils/storage'
const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://raw.githubusercontent.com/Chanzhaoyu/chatgpt-web/main/src/assets/avatar.jpg',
      name: 'Johnnylee',
      description: 'Star on <a href="https://github.com/Johnnylee1992/chatgpt-web" class="text-blue-500" target="_blank" >GitHub</a>',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
