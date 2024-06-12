var project = app.project;
var comp = project.activeItem;

if (comp && comp.selectedLayers.length > 0) {
    for (var i = 0; i < comp.selectedLayers.length; i++) {
        var selectedLayer = comp.selectedLayers[i];
        
        // Beam 이펙트의 Starting Point와 Ending Point 속성 찾기
        var beamEffect = selectedLayer.property("Effects").property("Beam");
        if (beamEffect) {
            var startPoint = beamEffect.property("Starting Point");
            var endPoint = beamEffect.property("Ending Point");
            
            if (startPoint && endPoint) {
                // Starting Point 익스프레션 수정
                var startPointExpression = startPoint.expression;
                startPointExpression = startPointExpression.replace(/layer\("Shape Layer (\d+)"\)/g, function(match, p1) {
                    return 'layer("Shape Layer ' + (parseInt(p1) + 1) + '")';
                });
                startPoint.expression = startPointExpression;
                
                // Ending Point 익스프레션 수정
                var endPointExpression = endPoint.expression;
                endPointExpression = endPointExpression.replace(/layer\("Shape Layer (\d+)"\)/g, function(match, p1) {
                    return 'layer("Shape Layer ' + (parseInt(p1) + 1) + '")';
                });
                endPoint.expression = endPointExpression;
                
                alert("익스프레션이 성공적으로 업데이트되었습니다.");
            } else {
                alert("Starting Point 또는 Ending Point 속성을 찾을 수 없습니다.");
            }
        } else {
            alert("Beam 이펙트를 찾을 수 없습니다.");
        }
    }
} else {
    alert("레이어를 선택하세요.");
}
