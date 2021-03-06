## 中介者
中介者模式的作用就是解除对象与对象之间的紧耦合关系。增加一个中介者对象后，所有的相关对象都通过中介者对象来通信，而不是互相引用，所以当一个对象发生改变时，只需要通知中介者对象即可。中介者使各对象之间耦合松散，而且可以独立地改变它们之间的交互。中介者模式使网状的多对多关系变成了相对简单的一对多关系。

中介者的另外一个优点是节省了对象的开支，把对象的关系放到终结器中维护。这样可以大大减少对象内的数据以及对象之间的关系属性。

## 与观察者模式的区别

- 中介者(mediator)强调的是同事(colleague)类之间的交互
- 而观察者(observer)中的目标类(subject)强调是目标改变后对观察者进行统一的通讯
- 两者非常相同的一点就是:中介者需要持有并且知道所有的同事类,而目标类也必须持有所有的目标类,但是是一目标类的接口引用方式持有,所以说目标类是不知道观察者的,多有的观察者都是一样的