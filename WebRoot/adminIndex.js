var _center;

Ext.onReady(function() {

	var _top = new Ext.Toolbar({
		style : 'background-color:Blue; background-image:url(resources/images/logo_bg.jpg);',
		height : 40,
		region : 'north',
		items : ['<h1>IT项目管理系统</h1>'/*, '-', {
					text : '测试按钮',
					handler : function() {
						_center.removeAll();
						var p = Ext.create('Ext.panel.Panel', {
									title:'Gan!!!',
									region : 'center',
									html:"<iframe width='100%' height='100%' src='gan/test2.html'></iframe>"
								});
						_center.add(p);
					}
				}*/]
	});

	_center = Ext.create('Ext.panel.Panel', {
				layout : "border",
				region : 'center',
				items : [admin()]
			});
	// var _center = proManageFun();
	var _bottom = new Ext.Panel({
				region : "south",
				frame : false,
				autoHeight : true,
				items : new Ext.Toolbar({
							height : 20,
							items : [{
										xtype : 'label',
										text : '版权所有，翻版必究'
									}]
						})

			});

	var _vp = new Ext.Viewport({
				layout : "border",
				items : [_top, _center, _bottom]
			});
});