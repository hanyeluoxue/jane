/**
 * Created by 寒夜落雪 on 2016/9/23.
 */
// $(window).scroll(function (e) {
//     if($(window).scrollTop()>400){
//         $('.category_frame').css({'position':'fixed'}).position()
//     }
//     if($(window).scrollTop()<=400){
//         $('.category_frame').css({'position':''})
//     }
// })
$(function(){
    var information = {
        position:'my_album',
        username: '乔建龙',
        headportrait: '../../Statics/image/222.jpg',
        sex: '../../Statics/image/222.jpg',
        introduce: '我是乔建龙，我一定可以的',
        favor_num: 222,
        follow_num: 222,
        weibo_num: 222,
        authentication_information: '老男孩教育的学员',
        information_percent_num: 90,
        weibo_level: 99,
        photo_address: [
            '../../Statics/image/222.jpg',
            '../../Statics/image/222.jpg',
            '../../Statics/image/222.jpg',
            '../../Statics/image/222.jpg',
            '../../Statics/image/222.jpg',
            '../../Statics/image/222.jpg',
        ],
        favor: {
            picture: '../../Statics/image/222.jpg',
            user: 'zhou陈尧',
            content: '凭什么和我打'
        },
        blogs: [
            {
                headportrait: '../../Statics/image/222.jpg',
                username: '乔建龙',
                ctime: '2016-9-20 19:40',
                type: '老男孩教育',
                content: '业内一流教育机构',
                hits: 999,
                'thumbs': 1,
                picture: '../../Statics/image/222.jpg',
            },
            {
                headportrait: '../../Statics/image/222.jpg',
                username: '乔建龙1',
                ctime: '2016-9-21 19:40',
                type: '老男孩教育1',
                content: '业内一流教育机构1',
                hits: 888,
                'thumbs': 1,
                picture: '../../Statics/image/222.jpg',
            },
            {
                headportrait: '../../Statics/image/222.jpg',
                username: '乔建龙2',
                ctime: '2016-9-22 19:40',
                type: '老男孩教育2',
                content: '业内一流教育机构2',
                hits: 777,
                'thumbs': 1,
                picture: '../../Statics/image/222.jpg',
            }
        ],
        pictures:[
            '../../Statics/image/222.jpg',
            '../../Statics/image/222.jpg',
            '../../Statics/image/222.jpg',
        ]
    }
    if(information.position=='my_profile') {
        $('img.headportrait').attr('src', information.headportrait);
        $('.username').text(information.username);
        $('img.sex').attr('src', information.sex);
        $('a.introduce').text(information.introduce);
        $('.favor_num').text(information.favor_num);
        $('.follow_num').text(information.follow_num);
        $('.weibo_num').text(information.weibo_num);
        $('.authentication_information').text(information.authentication_information);
        $('.information_percent_num').text(information.information_percent_num + '%');
        $('.percent').width(information.information_percent_num + '%')
        $('.weibo_level').text('lv.' + information.weibo_level);
        $('img.minialbum_content_big').attr('src', information.photo_address[0]);
        $('img.minialbum_content_small').eq(0).attr('src', information.photo_address[1]);
        $('img.minialbum_content_small').eq(1).attr('src', information.photo_address[2]);
        $('img.minialbum_content_small').eq(2).attr('src', information.photo_address[3]);
        $('img.minialbum_content_small').eq(3).attr('src', information.photo_address[4]);
        $('img.minialbum_content_small').eq(4).attr('src', information.photo_address[5]);
        $('img.minifavor_pic').attr('src', information.favor.picture);
        $('a.minifavor_user').text(information.favor.user);
        $('a.minifavor_content_detail').text(information.favor.content);

        $.each(information.blogs, function (n, value) {
            $('div.myweiboexample').clone().attr('class', 'myweiboclone').insertBefore($('div.myweiboexample'))
            $('.myweiboclone').find('img.myweibo_picture').attr('src', value.headportrait)
            $('.myweiboclone').find('a.myweibo_detail_user').text(value.username)
            $('.myweiboclone').find('a.myweibo_detail_ctime').text(value.ctime)
            $('.myweiboclone').find('a.myweibo_detail_type').text(value.type)
            $('.myweiboclone').find('.myweibo_detail_content').text(value.content)
            $('.myweiboclone').find('img.myweibo_detail_picture').attr('src', value.picture)
            $('.myweiboclone').find('a.my_weibo_hits').text('阅读量：' + value.hits + '推广')
            if (value.thumbs == 0) {
                $('.myweiboclone').find('a.myweibo_thumbs').removeClass('active')
            } else if (value.thumbs == 1) {
                $('.myweiboclone').find('div.myweibo_thumbs').addClass('active')
            }
            $('.myweiboclone').attr('class', 'myweibo').addClass('clearfix')
            console.log(n);
            console.log(value);
        })
    }else if (information.position==my_album){
        $.each(information.pictures,function (n,value) {
            $('.my_album_example').clone().attrHooks('class', 'my_album_item').insertBefore($('.my_album_example'))
        })
    }
})