import {request} from "@/network/request";

export function getClassifyData(){
  return request({
    url:'/category'
  })
}

export function getSubCategory(maitKey){
  return request({
    url:'/subcategory',
    params:{
      maitKey
    }
  })
}

export function getSubCategoryDetail(miniWallkey,type){
  return request({
    url:'/subcategory/detail',
    params:{
      miniWallkey,
      type
    }
  })
}
