## Proxy System
Leiten Anfragen an eigentliche Service weiter.

- Zugriffssteuerung: Nur autorisierte Anfragen werden weitergeleitet.
- Lastverteilung: Anfragen können auf mehrere Server verteilt werden.
- Caching: Daten können zwischengespeichert werden, um die Performance zu verbessern.
- Sicherheit: Proxies können Anfragen filtern, um schädliche Inhalte herauszufiltern.

## Message Broker
Speichern Nachrichten kurzzeitig, um die kommunikation zwischen Geräten zu gewährtstellen.

- Asynchrone Kommunikation: Anwendungen können Nachrichten senden, ohne auf eine sofortige Antwort warten zu müssen.
- Entkopplung: Der Sender einer Nachricht muss nicht direkt mit dem Empfänger verbunden sein.
- Nachrichtenrouting: Nachrichten können basierend auf bestimmten Regeln an verschiedene Empfänger weitergeleitet werden.
- Persistenz: Nachrichten können gespeichert werden, um sicherzustellen, dass sie auch bei einem Systemausfall nicht verloren gehen.

## Remote Procedure Call (RPC)
Ruft eine Funktion auf z.b. einem anderen Computer auf, als ob es lokal aufgerufen wäre.

- Transparenz: Der Aufruf einer entfernten Prozedur sieht aus wie ein lokaler Funktionsaufruf.
- Synchronisation: Der Aufrufende wartet auf die Beendigung der Prozedur und erhält dann das Ergebnis.
- Flexibilität: Unterstützt sowohl synchrone als auch asynchrone Kommunikationsmuster.
- Beispiele für RPC-Frameworks sind gRPC (Google RPC) und XML-RPC.

