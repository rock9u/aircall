import Axios from 'axios'
import { CALL_URL } from '../const/api.const'
export async function getActivities() {
  try {
    const config = {
      baseURL: CALL_URL,
      url: '/activities/',
      method: 'get',
    }
    let res = await Axios(config)
    if (res.status >= 200 && res.status < 300) {
      return res.data
    } else {
      console.warn('Error at getCallDetail')
    }
  } catch (err) {
    console.error('Error at getCallDetail', err)
  }
}

export async function getCallDetail(id) {
  try {
    const config = {
      baseURL: CALL_URL,
      url: '/activities' + `/${id}/`,
      method: 'get',
      params: { id },
    }
    let res = await Axios(config)
    if (res.status >= 200 && res.status < 300) {
      return res.data
    } else {
      console.warn('Error at getCallDetail')
    }
  } catch (err) {
    console.error('Error at getCallDetail', err)
  }
}

export async function updateCall(id, isArchived) {
  try {
    const config = {
      baseURL: CALL_URL,
      url: '/activities' + `/${id}/`,
      method: 'post',
      data: { is_archived: isArchived },
    }
    console.log(config)
    let res = await Axios(config)
    if (res.status >= 200 && res.status < 300) {
      return
    } else {
      console.warn('Error at getCallDetail')
    }
  } catch (err) {
    console.error('Error at getCallDetail', err)
  }
}

export async function resetArchives() {
  try {
    const config = {
      baseURL: CALL_URL,
      url: '/reset/',
      method: 'get',
    }
    let res = await Axios(config)
    if (res.status >= 200 && res.status < 300) {
      return
    } else {
      console.warn('Error at getCallDetail')
    }
  } catch (err) {
    console.error('Error at getCallDetail', err)
  }
}
