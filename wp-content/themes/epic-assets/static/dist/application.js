function ttRetargeting(){var g=window&&window.document||document,u=window.BEE_SERVER_URL||"https://b.triptease.io",r=window.BEE_WINDOW_LOCATION_URL||window.location.href,f=!!function(e){if(r){var t=r.match(new RegExp(e+"=([^&]*)"));return t&&t[1]}return}("tt_rt"),h="";function w(e,t,r){if(!g.getElementById(t)){var i=g.createElement(e);i.setAttribute("id",t),i.setAttribute("src",r),i.setAttribute("width","0"),i.setAttribute("height","0"),i.setAttribute("style","display: none"),g.body.appendChild(i)}}window.addEventListener("message",function(e){if(e.data&&"triptease.config"===e.data.type&&e.data.userId){var t=e.data,r=t.payload,i=window.triptease&&window.triptease.config&&window.triptease.config.reservation,a={tripteaseUserId:t.userId,sessionId:t.sessionId,apiKey:r.apiKey,bucket:function(e){var t,r=0;if(0===e.length)return r.toString();for(t=0;t<e.length;t++)r=(r<<5)-r+e.charCodeAt(t),r|=0;return(Math.abs(r)%2).toString()}(t.userId),conversion:"Confirmation"===r.pageData.type||!!i,searched:"RoomsAndRates"===r.pageData.type};if(JSON.stringify(a)!==JSON.stringify(h)&&(function(e,t,r,i,a){var n="bee-tracking-tags",c=u+"?apikey="+e+"&bucket="+r+"&conversion="+i+"&clicked="+f+"&searched="+t+"&tripteaseUserId="+a,o=g.getElementById(n);if(o){if(o.src===c)return;o.parentNode.removeChild(o)}w("iframe",n,c)}((h=a).apiKey,a.searched,a.bucket,a.conversion,a.tripteaseUserId),a.conversion)){var n={currency:r.pageData.currency||i.currency,reference:r.pageData.reference||i.reservationId,price:r.pageData.price||i.totalPrice,checkin:r.pageData.checkin,checkout:r.pageData.checkout,basePrice:r.pageData.basePrice};c=a.apiKey,o=n,s=window.localStorage.getItem("tt_bw_id"),d=o.checkin,p=o.checkout,w("img","tt-rt-conv-pixel",u+"/tracking?event=converted&apiKey="+c+"&currency="+o.currency+"&reservationId="+o.reference+"&totalPrice="+o.price+"&checkin="+(d?d.toISOString().split("T")[0]:"")+"&checkout="+(p?p.toISOString().split("T")[0]:"")+"&basePrice="+(o.basePrice||"")+"&platformUserId="+s)}}var c,o,s,d,p})}ttRetargeting();