var posts=["2021/11/16/202111162204/","2021/11/16/20211116/","2021/11/16/202111162235/","2021/11/26/202111230844/","2021/11/24/20211124/","2020/12/02/202112020308/","2021/11/28/202111282333/","2021/11/24/202111242257/","2020/12/04/202112042136/","2021/12/03/202112031625/","2020/12/02/202112020321/","2022/01/18/202201181710/","2023/04/15/AI0001/","2021/12/11/202112112320/","2022/05/26/202205261648/","2023/03/16/StarNavigation/","2023/01/18/Ezdun/","2023/04/04/UniappBluetooth/","2023/04/06/flutter0002/","2023/04/06/flutter0001/","2023/04/27/flutter0003/","2022/04/18/hexo-themes1/","2022/03/27/idea2022327/","2020/01/18/hello-world/","2023/01/12/js-gbk/","2022/03/30/officetools/","2023/02/21/tools/","2022/11/03/idea202223/","2022/03/28/ideaall/","2022/03/26/threewave/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};