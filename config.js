var _config = {
    blog_name       : 'Yukuan Blog',         // 博客名称
    owner           : 'xuyukuan',           // github 用户名
    repo            : 'yukuan.github.com',// github 中对应项目名
    duoshuo_id      : '6247248132308992770',            // 在第三方评论插件多说申请站点的子域名
    access_token    : 'bd1894ed67de982d5a5f20d089b39307f6d8eee5',       // 请求量大时需要在 github 后台单独设置一个读取公开库的 token, 注意将token 拆成两个字符串，否则会被系统自动删除掉
    per_page        : '15'                    // 默认一页显示几篇文章
}

var duoshuoQuery = {short_name:_config['duoshuo_id']};
