(function() {var implementors = {};
implementors["memsocket"] = [{"text":"impl <a class=\"trait\" href=\"https://docs.rs/futures-io/0.3.5/futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"memsocket/struct.MemorySocket.html\" title=\"struct memsocket::MemorySocket\">MemorySocket</a>","synthetic":false,"types":["memsocket::MemorySocket"]}];
implementors["netcore"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://docs.rs/futures-io/0.3.5/futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"netcore/compat/struct.IoCompat.html\" title=\"struct netcore::compat::IoCompat\">IoCompat</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/tokio/0.2.21/tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a>,&nbsp;</span>","synthetic":false,"types":["netcore::compat::IoCompat"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/futures-io/0.3.5/futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"netcore/transport/tcp/struct.TcpSocket.html\" title=\"struct netcore::transport::tcp::TcpSocket\">TcpSocket</a>","synthetic":false,"types":["netcore::transport::tcp::TcpSocket"]}];
implementors["noise"] = [{"text":"impl&lt;TSocket&gt; <a class=\"trait\" href=\"https://docs.rs/futures-io/0.3.5/futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"noise/struct.NoiseSocket.html\" title=\"struct noise::NoiseSocket\">NoiseSocket</a>&lt;TSocket&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TSocket: <a class=\"trait\" href=\"https://docs.rs/futures-io/0.3.5/futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["noise::socket::NoiseSocket"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()