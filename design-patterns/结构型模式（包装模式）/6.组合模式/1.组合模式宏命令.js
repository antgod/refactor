var extended = function (child, parent) {
	var F = function () {}
	F.prototype = parent.prototype
	child.prototype = new F()
}

var MacroCommand = function () {
	this.commandList = []
}

MacroCommand.prototype = {
	add: function (command) {
		this.commandList.push(command)
	},
	execute: function () {
		for (var i = 0, command; command = this.commandList[i++]; ) {
			command.execute()
		}
	}
}

var Command = function (command) {
	this.command = command
}

extended(Command, MacroCommand)

Command.prototype.execute = function () {
	console.log(this.command)
}

Command.prototype.add = function () {
	console.error("字命令不能再添加命令")
}


//打开所有家用电器
var openAll = new MacroCommand()
var openCumputer = new MacroCommand()
var openRoom = new MacroCommand()

var openQQ = new Command('打开qq')
var openWeChar = new Command('打开微信')

var openLight = new Command('打开灯')
var openTV = new Command('打开电视')
var openDVD = new Command('打开DVD')
openTV.add(openDVD)

openAll.add(openCumputer)
openAll.add(openRoom)

openCumputer.add(openQQ)
openCumputer.add(openWeChar)

openRoom.add(openLight)
openRoom.add(openTV)

openAll.execute()