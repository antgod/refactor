var myNamespace = function () {
  var Configure = function () {
    var privateName = "someone's name"
    var privateReturnName = function () {
      return privateName
    }
    var privateSetName = function (name) {
      privateName = name
    }
    // 返回单例对象
    return {
      setName: function (name) {
        privateSetName(name)
      },
      getName: function () {
        return privateReturnName()
      }
    }
  }
  // 储存configure的实例
  var instance
  return {
    getInstance: function () {
      if (!instance) {
        instance = Configure()
      }
      return instance
    }
  }
}()
// 使用方法上就需要getInstance这个函数作为中间量了：
myNamespace.getInstance().getName()
