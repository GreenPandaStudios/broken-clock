(this["webpackJsonpbroken-clock"]=this["webpackJsonpbroken-clock"]||[]).push([[0],{16:function(e,t,n){},2:function(e,t,n){e.exports={row:"Counter_row__2oMIN",value:"Counter_value__1gAD_",button:"Counter_button__3bJ69",textbox:"Counter_textbox__74dWn",asyncButton:"Counter_asyncButton__3piZs Counter_button__3bJ69"}},25:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(7),s=n.n(r),i=(n(16),n.p,n(5)),c=n(4),u=n(6),d=n.n(u),h=n(8),l=n(3);function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var f=Object(l.b)("counter/fetchCount",function(){var e=Object(h.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),b=Object(l.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(f.pending,(function(e){e.status="loading"})).addCase(f.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),y=b.actions,w=(y.increment,y.decrement,y.incrementByAmount,b.reducer),v=(n(2),n(1));Object(l.b)("timer/fetchTime",Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout((function(){return e()}),500)}));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)}))));var g=Object(l.c)({name:"timer",initialState:{timeOffset:0},reducers:{setOffset:function(e,t){e.timeOffset=t.payload.timeOffset}}}),p=(g.actions.setOffset,g.reducer);function k(){Object(c.b)();var e=Object(o.useState)(0),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(o.useState)(0),s=Object(i.a)(r,2),u=s[0],d=s[1];return Object(o.useEffect)((function(){setInterval((function(){return d(1+u)}),500)})),Object(o.useEffect)((function(){Math.random()>.5?a(0):a(9999999*Math.random()-9999999*Math.random())}),[]),function(){var e=new Date;return e.setMinutes(e.getMinutes()+n%60),e.setSeconds(e.getSeconds()+1.2*n%60),e.setMonth(e.getMonth()+5.6*n%12),e.setFullYear(e.getFullYear()+5.6*n%100),Object(v.jsxs)("div",{class:"container",children:[Object(v.jsx)("div",{class:"row mt-4"}),Object(v.jsx)("div",{class:"row mt-4"}),Object(v.jsx)("div",{class:"row mt-4"}),Object(v.jsx)("div",{class:"row text-center w-100 display-1",children:e.toLocaleTimeString()}),Object(v.jsx)("div",{class:"row text-center w-100 display-6",children:e.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}),Object(v.jsx)("div",{class:"row mt-4"})]})}()}n(25),n(26);function j(){var e=["Even a broken clock is right twice a day. Except this one.","\u201cListen to God with a broken heart. He is not only the doctor who mends it, but also the father who wipes away the tears.\u201d\u2015 Criss Jami","\u201ci felt her absence. it was like waking up one day with no teeth in your mouth. you wouldn't need to run to the mirror to know they were gone\u201d\u2015 James Dashner, The Scorch Trials","\u201cTo be rejected by someone doesn't mean you should also reject yourself or that you should think of yourself as a lesser person. It doesn't mean that nobody will ever love you anymore. Remember that only ONE person has rejected you at the moment, and it only hurt so much because to you, that person's opinion symbolized the opinion of the whole world, of God.\u201d\u2015 Jocelyn Soriano, Mend My Broken Heart","\u201cThe best way to not get your heart broken, is pretending you don't have one.\u201d\u2015 Charlie Sheen","\u201cYes, I understand why things had to happen this way. I understand his reason for causing me pain. But mere understanding does not chase away the hurt. It does not call upon the sun when dark clouds have loomed over me. Let the rain come then if it must come! And let it wash away the dust that hurt my eyes!\u201d\u2015 Jocelyn Soriano, Mend My Broken Heart","\u201cWe should love, not fall in love, because everything that falls, gets broken.\u201d\u2015 Taylor Swift, Taylor Swift","\u201cHe'd broken his leg dropping down from the rooftop. The bone didn't set right, and he'd limped ever after. So he'd found himself a Fabrikator and had his cane made. It became a declaration. There was no part of him that was no broken, that had not healed wrong, and there was no part of him that was not stronger for having been broken.\u201d \u2015 Leigh Bardugo, Six of Crows","\u201cWe die a little every day and by degrees we\u2019re reborn into different men, older men in the same clothes, with the same scars.\u201d \u2015 Mark Lawrence, King of Thorns","\u201cI scream for everything that has gone wrong. I scream for everything broken in our lives.\u201d \u2015 Marie Lu, Champion","\u201cSo I am not a broken heart. \nI am not the weight I lost or miles or ran and I am not the way I slept on my doorstep under the bare sky in smell of tears and whiskey because my apartment was empty and if I were to be this empty I wanted something solid to sleep on. Like concrete.\nI am not this year and I am not your fault.\nI am muscles building cells, a little every day, because they broke that day,\nbut bones are stronger once they heal and I am smiling to the bus driver and replacing my groceries once a week and I am not sitting for hours in the shower anymore.\nI am the way a life unfolds and bloom and seasons come and go and I am the way the spring always finds a way to turn even the coldest winter into a field of green and flowers and new life.\nI am not your fault.\u201d \u2015 Charlotte Eriksson, You're Doing Just Fine","\u201cBut hurry, let's entwine ourselves as one, our mouth broken, our soul bitten by love, so time discovers us safely destroyed.\u201d \u2015 Federico Garcia Lorca","\u201cYou are damaged and broken and unhinged. But so are shooting stars and comets.\u201d \u2015 Nikita Gill","\u201cThere is no perfection, only beautiful versions of brokenness.\u201d \u2015 Shannon L. Alder","\u201cI once had a dreams of becoming a beautiful poet, but upon an unfortunate series of events some of those dreams dashed and divided like a million stars in the night sky that I wished on over and over again, sparkling and broken. But I didn't really mind, because I knew that it takes getting everything you ever wanted, and then losing it to know what true freedom is.\u201d \u2015 Lana Del Rey","\u201cA fine glass vase goes from treasure to trash, the moment it is broken. Fortunately, something else happens to you and me. Pick up your pieces. Then, help me gather mine.\u201d \u2015 Vera Nazarian, The Perpetual Calendar of Inspiration","\u201cWho fixes broken people? Is it only other broken people, ones who've already been ruined? And do we need to be fixed? It was the messiness and hurt in our pasts that drove us, and that same hurt connected us at a subdermal level, the kind of scars written so deeply in your cells that you can't even see them anymore, only recognize them in someone else.\u201d \u2015 Leah Raeder, Unteachable"];Object(o.useEffect)((function(){return r(e[(t=e.length,Math.floor(Math.random()*t))]);var t}),[]);var t=Object(o.useState)('"a clock that is sometimes broken."'),n=Object(i.a)(t,2),a=n[0],r=n[1];return Object(v.jsx)(v.Fragment,{children:a})}var O=function(){return Object(v.jsxs)("div",{class:"container",children:[Object(v.jsx)("div",{class:"row",children:Object(v.jsx)(k,{})}),Object(v.jsx)("div",{class:"row display-6",children:"We're All Broken Clocks"}),Object(v.jsx)("div",{class:"row",children:Object(v.jsx)(j,{})})]})},x=Object(l.a)({reducer:{counter:w,timer:p}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(c.a,{store:x,children:Object(v.jsx)(O,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.f3268034.chunk.js.map