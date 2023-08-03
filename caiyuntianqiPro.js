/*************************************

项目名称：彩云天气-净化/SVIP
Token数据来源：@WeiRenQAQ
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/(biz|wrapper)\.cyapi\.cn\/(.+\/(user.+|visitors|activity)|p\/v\d\/vip_info) url script-response-body https://raw.githubusercontent.com/thfou/Rewrite/main/caiyuntianqiPro.js
^http:\/\/adx\.sogaha\.cn\/sdk\/ad\/get url reject-200

[mitm]
hostname = *.cyapi.cn, adx.sogaha.cn

*************************************/


var eiliug = JSON.parse($response.body);
const vip = '/vip_info';
const adhf = '/activity';
const user = '(user|visitors)';

if ($request.url.indexOf(vip) != -1){
    eiliug.vip = {
        "expires_time" : "4092599349",
        "is_auto_renewal" : true
      };
    eiliug.svip = {
        "expires_time" : "4092599349",
        "is_auto_renewal" : true
      };
}

if ($request.url.indexOf(adhf) != -1){
    eiliug.activities = [];
}

if ($request.url.indexOf('user') != -1){
    eiliug.result.ranking_above = 99;
    eiliug.result.is_vip = true;
    eiliug.result.vip_expired_at = 4092599349;
    eiliug.result.svip_given = 9999;
    eiliug.result.is_xy_vip = true;
    eiliug.result.xy_svip_expire = 4092599349; 
    eiliug.result.wt.vip = {
        "auto_renewal_type" : "",
        "expired_at" : 0,
        "enabled" : true,
        "svip_apple_expired_at" : 4092599349,
        "is_auto_renewal" : true,
        "svip_expired_at" : 4092599349,
        "svip_auto_renewal_type" : ""
      };
    eiliug.result.wt.svip_given = 9999;
    eiliug.result.wt.ranking_above = 99;
    eiliug.result.is_phone_verified = true;
    eiliug.result.name = "万鹿";
    eiliug.result.avatar = "https://wanludianshang.com/images/wanlu_icon.png";
    eiliug.result.phone_num = "13145200000";
    eiliug.result.vip_take_effect = 1;
    eiliug.result.is_primary = true;
    eiliug.result.xy_vip_expire = 4092599349;
    eiliug.result.svip_expired_at = 4092599349;
    eiliug.result.svip_take_effect = 1;
    eiliug.result.vip_type = "s";
    eiliug.result.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJ1c2VyX2lkIjoiNWY1YmZjNTdkMmM2ODkwMDE0ZTI2YmI4Iiwic3ZpcF9leHBpcmVkX2F0IjoxNzA1MzMxMTY2LjQxNjc3MSwidmlwX2V4cGlyZWRfYXQiOjB9.h_Cem89QarTXxVX9Z_Wt-Mak6ZHAjAJqgv3hEY6wpps";
    eiliug.result.bound_status.qq.username = "eiliug";
    eiliug.result.bound_status.weixin.username = "eiliug";
    eiliug.result.bound_status.caiyun.username = "eiliug";
    eiliug.result.bound_status.twitter.username = "eiliug";
    eiliug.result.bound_status.facebook.username = "eiliug";
    eiliug.result.bound_status.apple.username = "eiliug";
    eiliug.result.bound_status.weibo.username = "eiliug";
}

$done({ body: JSON.stringify(eiliug)});
