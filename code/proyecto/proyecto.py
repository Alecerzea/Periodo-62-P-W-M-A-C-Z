import paho.mqtt.client as mqtt

# Configuración de MQTT
broker = "mqtt.example.com"  # Dirección IP o nombre de dominio del broker MQTT
port = 1883  # Puerto de comunicación del broker
topic = "mytopic"  # Tema MQTT para publicar la información

# Función de callback al conectarse al broker MQTT
def on_connect(client, userdata, flags, rc):
    print("Conectado al broker MQTT")
    # Suscribirse al tema
    client.subscribe(topic)

# Función de callback al recibir un mensaje MQTT
def on_message(client, userdata, msg):
    # Procesar el mensaje recibido
    data = msg.payload.decode("utf-8")
    print("Mensaje recibido:", data)

# Crear un cliente MQTT
client = mqtt.Client()

# Asignar las funciones de callback
client.on_connect = on_connect
client.on_message = on_message

# Conectarse al broker MQTT
client.connect(broker, port, 60)

# Iniciar el bucle de la comunicación MQTT
client.loop_start()

# Simulación de obtención de información
while True:
    # Obtener la información
    info = obtener_informacion()

    # Publicar la información en el tema MQTT
    client.publish(topic, info)

    # Esperar un tiempo antes de obtener más información
    time.sleep(1)

# Detener el bucle de la comunicación MQTT
client.loop_stop()
client.disconnect()