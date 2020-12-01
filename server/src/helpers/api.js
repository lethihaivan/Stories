import { LIMIT_EACH_PAGE } from "../constants"

export const pagination = async (dataQuery, opt) => {
  const { page, limit, sort } = opt
  // console.log(page, limit, sort)
  // console.log(dataQuery)
  try {
    const data = await dataQuery
      .skip(((page || 1) - 1) * +limit)
      .limit(+limit || LIMIT_EACH_PAGE)
      .sort(sort)
    console.log({
      data,
      currentPage: +page,
      numberOfResult: data.length
    })

    return {
      data,
      currentPage: +page,
      numberOfResult: data.length
    }
  } catch (err) {
    throw new Error(err)
  }
}