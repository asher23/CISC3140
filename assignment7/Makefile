FLAGS = -g
JC = javac
JVM= java

.SUFFIXES: .java .class

.java.class:
	$(JC) $(JFLAGS) $*.java

CLASSES = \
	Child.java \
	Main.java \
	Parent.java \

MAIN = Main

default: classes

classes: $(CLASSES:.java=.class)

run: classes
	$(JVM) $(MAIN)


clean:
	$(RM) *.class