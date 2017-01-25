Basic Git Commands
==================
These are common Git commands used in various situations:

 * [git init](#init) : Create an empty Git repository or reinitialize an existing one
 * [git clone](#clone) : Clone a repository into a new directory
 * [git add](#add) : Add file contents to the index
 * [git mv](#mv) : Move or rename a file, a directory, or a symlink
 * [git reset](#reset) : Reset current HEAD to the specified state
 * [git rm](#rm) : Remove files from the working tree and from the index
 * [git bisect](#bisect) : Use binary search to find the commit that introduced a bug
 * [git grep](#grep) : Print lines matching a pattern
 * [git log](#log) : Show commit logs
 * [git show](#show) : Show various types of objects
 * [git status](#status) : Show the working tree status
 * [git branch](#branch) : List, create, or delete branches
 * [git checkout](#checkout) : Switch branches or restore working tree files
 * [git commit](#commit) : Record changes to the repository
 * [git diff](#diff) : Show changes between commits, commit and working tree, etc
 * [git merge](#merge) : Join two or more development histories together
 * [git rebase](#rebase) : Forward-port local commits to the updated upstream head
 * [git tag](#tag) : Create, list, delete or verify a tag object signed with GPG
 * [git fetch](#fetch) : Download objects and refs from another repository
 * [git pull](#pull) : Fetch from and integrate with another repository or a local branch
 * [git push](#push) : Update remote refs along with associated objects
  


Starting a working area 
-----------------------
Git conceptually revolves around a repository. To begin working we need a repository on our local machine. We can either create a new repository or copy an existing repository.

[top](#top)<a name="init" class="anchor"></a>
<pre><code>git init</code></pre>

![git init](/images/git/git-init.png)
To create a new git repository directory, (or to convert an existing source directory to a git repository), go to your desired directory in a terminal and provide the command <code>git init</code>.  
This would create a <code>.git</code> directory inside the repository directory. If this directory is already a git repository, it would be re-initialized as a new repository.

[top](#top)<a name="clone" class="anchor"></a>
<pre><code>git clone &lt;repository_path&gt; [directory]</code></pre>

![git clone](/images/git/git-clone.png)
To copy a repository from remote location to a new directory, we can make use of <code>git clone</code> command. This comes handy, when we want to contribute to an already existing code, on which other friends have already started working. Since this command connects to remote repository, it may require internet connection if the remote repository lies outside local network. Running it will create a directory as per the remote repo name.  
If you want to clone repository in a custom directory name, you may pass that as an argument

Work on the current change
--------------------------
[top](#top)<a name="add" class="anchor"></a>
<pre><code>git add &lt;file.path&gt;</code></pre>
![git add](/images/git/git-add.png)
Git maintains an index of all the files to be committed. If we are working on multiple files and want to add files selectively to the index, this command helps us in doing so.
A non-indexed file would show in red (default colour) and an indexed file would show in green when status is checked.
[top](#top)<a name="mv" class="anchor"></a>
<pre><code>git mv &lt;file.path&gt; &lt;new-file.path&gt;</code></pre>
![git mv](/images/git/git-mv.png)
mv helps renaming or moving an existing file to new path. 
[top](#top)<a name="reset" class="anchor"></a>
<pre><code>git reset  &lt;file.path&gt;</code></pre>
![git reset](/images/git/git-reset.png)
It Resets current HEAD to the specified state. It is reverses the git add command.
[top](#top)<a name="rm" class="anchor"></a>
<pre><code>git rm</code></pre>
![git rm](/images/git/git-rm.png)
   rm         Remove files from the working tree and from the index

examine the history and state
-----------------------------
[top](#top)<a name="bisect" class="anchor"></a>
<pre><code>git bisect</code></pre>
![git bisect](/images/git/git-bisect.png)
Bisect is a group of commands provided by git which use binary search to find a particular commit. E.g. if a commit caused an issue, but there are many commits after that and we want to find that particular commit, we can make use of this tool.
The first command is `git bisect start` . This starts the tool.  
Now, we have to let this tool know about a commit which we are sure which is good.
`git bisect good <commithashcode>`  
Now, we have to let this tool know about a commit which we are sure which is bad.
`git bisect bad <commithashcode>` 
Now, git takes us to a commit, which we needs to check if this commit is good or bad and inform git by using command `git bisect good/bad`  
This goes on, until we reach the commit that we are looking for.
To go back to original commit (from where we started bisecting) use the command `git bisect reset`.
[top](#top)<a name="grep" class="anchor"></a>
<pre><code>git grep</code></pre>
![git grep](/images/git/git-grep.png)
This command looks for specified pattern in the working tree and prints the matching lines.
[top](#top)<a name="log" class="anchor"></a>
<pre><code>git log</code></pre>
![git log](/images/git/git-log.png)
 This command shows the commit logs from history
[top](#top)<a name="show" class="anchor"></a>
<pre><code>git show</code></pre>
![git show](/images/git/git-show.png)
It shows various types of objects depending upon the input flags
[top](#top)<a name="status" class="anchor"></a>
<pre><code>git status</code></pre>
![git status](/images/git/git-status.png)
It shows the working tree status

grow, mark and tweak your common history
----------------------------------------
[top](#top)<a name="branch" class="anchor"></a>
<pre><code>git branch</code></pre>
![git branch](/images/git/git-branch.png)
It Lists, creates, or deletes specified branches
[top](#top)<a name="checkout" class="anchor"></a>
<pre><code>git checkout</code></pre>
![git checkout](/images/git/git-checkout.png)
   checkout   Switch branches or restore working tree files
[top](#top)<a name="commit" class="anchor"></a>
<pre><code>git commit</code></pre>
![git commit](/images/git/git-commit.png)
   commit     Record changes to the repository
[top](#top)<a name="diff" class="anchor"></a>
<pre><code>git diff</code></pre>
![git diff](/images/git/git-diff.png)
   diff       Show changes between commits, commit and working tree, etc
[top](#top)<a name="merge" class="anchor"></a>   
<pre><code>git merge</code></pre>
![git merge](/images/git/git-merge.png)
   merge      Join two or more development histories together
[top](#top)<a name="rebase" class="anchor"></a>
<pre><code>git rebase</code></pre>
![git rebase](/images/git/git-rebase.png)
   rebase     Forward-port local commits to the updated upstream head
[top](#top)<a name="tag" class="anchor"></a>
<pre><code>git tag</code></pre>
![git tag](/images/git/git-tag.png)
   tag        Create, list, delete or verify a tag object signed with GPG

collaborate
-----------
[top](#top)<a name="fetch" class="anchor"></a>
<pre><code>git fetch</code></pre>
![git fetch](/images/git/git-fetch.png)
   fetch      Download objects and refs from another repository
[top](#top)<a name="pull" class="anchor"></a>
![git pull](/images/git/git-pull.png)
<pre><code>git pull</code></pre>
   pull       Fetch from and integrate with another repository or a local branch
[top](#top)<a name="push" class="anchor"></a>
<pre><code>git push</code></pre>
![git push](/images/git/git-push.png)
   push       Update remote refs along with associated objects

<!--
  add                       merge-ours
  add--interactive          merge-recursive
  am                        merge-resolve
  annotate                  merge-subtree
  apply                     merge-tree
  archive                   mergetool
  bisect                    mktag
  bisect--helper            mktree
  blame                     mv
  branch                    name-rev
  bundle                    notes
  cat-file                  pack-objects
  check-attr                pack-redundant
  check-ignore              pack-refs
  check-mailmap             patch-id
  check-ref-format          prune
  checkout                  prune-packed
  checkout-index            pull
  cherry                    push
  cherry-pick               quiltimport
  clean                     read-tree
  clone                     rebase
  column                    receive-pack
  commit                    reflog
  commit-tree               relink
  config                    remote
  count-objects             remote-ext
  credential                remote-fd
  credential-cache          remote-ftp
  credential-cache--daemon  remote-ftps
  credential-store          remote-http
  daemon                    remote-https
  describe                  remote-testsvn
  diff                      repack
  diff-files                replace
  diff-index                request-pull
  diff-tree                 rerere
  difftool                  reset
  difftool--helper          rev-list
  fast-export               rev-parse
  fast-import               revert
  fetch                     rm
  fetch-pack                send-pack
  filter-branch             sh-i18n--envsubst
  fmt-merge-msg             shell
  for-each-ref              shortlog
  format-patch              show
  fsck                      show-branch
  fsck-objects              show-index
  gc                        show-ref
  get-tar-commit-id         stage
  grep                      stash
  hash-object               status
  help                      stripspace
  http-backend              submodule
  http-fetch                submodule--helper
  http-push                 subtree
  imap-send                 symbolic-ref
  index-pack                tag
  init                      unpack-file
  init-db                   unpack-objects
  instaweb                  update-index
  interpret-trailers        update-ref
  log                       update-server-info
  ls-files                  upload-archive
  ls-remote                 upload-pack
  ls-tree                   var
  mailinfo                  verify-commit
  mailsplit                 verify-pack
  merge                     verify-tag
  merge-base                web--browse
  merge-file                whatchanged
  merge-index               worktree
  merge-octopus             write-tree
  merge-one-file
-->
