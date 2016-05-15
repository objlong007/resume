(function () {    
    var controller = {
        home: {
            init: function () {
                var data = {
                    ps: {
                        img: "imgs/1.jpg",
                        name: "于常龙",
                        birth: "1991/1/17",
                        post: "前端工程师"
                    },
                    item: [
                        {
                            id: 1,
                            select: "个人简介"
                        },
                        {
                            id: 2,
                            select: "工作经验"
                        },
                        {
                            id: 3,
                            select: "掌握技能"
                        },
                        {
                            id: 4,
                            select: "自我定位"
                        }
                    ]
                };
                var Home = React.createClass({
                    render: function() {
                        return (
                            <div className="home">
                                <Ps ps={this.props.data.ps} />
                                <Item item={this.props.data.item} />
                            </div>
                        );
                    }
                });
                var Ps = React.createClass({
                    render: function () {
                        return (
                            <div className="ps">
                                <Portrait img={this.props.ps.img} />
                                <Desc name={this.props.ps.name} birth={this.props.ps.birth} />
                                <Post post={this.props.ps.post}/>
                            </div>
                        )
                    }
                });
                var Portrait = React.createClass({
                    render: function () {
                        return (
                            <div className="portrait">
                                <img src={this.props.img} />
                            </div>
                        );
                    }
                });
                var Desc = React.createClass({
                    render: function() {
                        return (
                            <div className="desc">
                                <span>{this.props.name}</span>
                                <span>{this.props.birth}</span>
                            </div>
                        );
                    }
                });
                var Post = React.createClass({
                    render: function () {
                        return (
                            <div className="post">{this.props.post}</div>
                        )
                    }
                })
                var Item = React.createClass({
                    render: function () {
                        var one = this.props.item;
                        var all = one.map(function (a) {
                            return (
                                <div className="item" key={a.id}>
                                    {a.select}
                                </div>       
                            );
                        });
                        return (
                            <div className="all">
                                {all}
                            </div>
                        );                            
                    }
                });
                ReactDOM.render(
                  <Home data={data} />,
                  document.getElementById('main-wrap-1')
                );
            }
        }
    };
    controller.home.init();
}) ()
