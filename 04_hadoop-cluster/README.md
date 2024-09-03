# Install First
https://archive.apache.org/dist/hadoop/common/hadoop-3.2.1/hadoop-3.2.1.tar.gz



# Doesnt Work half the time
vagrant scp core-site.xml node-1:/usr/local/hadoop/etc/hadoop/core-site.xml
vagrant scp hdfs-site.xml node-1:/usr/local/hadoop/etc/hadoop/hdfs-site.xml

# No Permission:
vagrant scp core-site.xml node1:~/core-site.xml
vagrant scp hdfs-site.xml node1:~/hdfs-site.xml

vagrant scp core-site.xml node2:~/core-site.xml
vagrant scp hdfs-site.xml node2:~/hdfs-site.xml

vagrant scp core-site.xml node3:~/core-site.xml
vagrant scp hdfs-site.xml node3:~/hdfs-site.xml


# For each
vagrant ssh node1
vagrant ssh node2
vagrant ssh node3

# Do:
sudo -s
mv /home/vagrant/core-site.xml /usr/local/hadoop/etc/hadoop/
mv /home/vagrant/hdfs-site.xml /usr/local/hadoop/etc/hadoop/hdfs-site.xml


# Then
## Only for node1
vagrant ssh node1
sudo -s
export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64

su - 

/usr/local/hadoop/bin/hdfs namenode -format
/usr/local/hadoop/sbin/start-dfs.sh

## Check with
/usr/local/hadoop/bin/hdfs dfsadmin -report


  # Hadoop version
  hadoop_version = "3.2.1"
  # Path to the local Hadoop tar.gz file
  hadoop_tar = "hadoop-#{hadoop_version}.tar.gz"

        cp /vagrant/#{hadoop_tar} /home/hadoop/



/usr/local/hadoop/etc/hadoop/hadoop-env.sh

/usr/local/hadoop/bin/hadoop
# <------------- Hadoop Test ------------------->

# Create a test directory in HDFS
/usr/local/hadoop/bin/hadoop fs -mkdir /test

# Verify directory creation
/usr/local/hadoop/bin/hadoop fs -ls /

# Create a small test file on the local filesystem
echo "Hello, Hadoop!" > /vagrant/testfile.txt

# Upload the test file to HDFS
hadoop fs -put /vagrant/testfile.txt /test

# List the files in the HDFS test directory to verify upload
hadoop fs -ls /test

# Retrieve the file from HDFS to verify it can be downloaded
hadoop fs -get /test/testfile.txt /vagrant/testfile_from_hdfs.txt
