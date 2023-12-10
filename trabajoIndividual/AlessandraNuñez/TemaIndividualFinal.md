# Base de datos de series temporales

## ¿Qué son las series temporales? (Naqvi et al., 2017)

Las series temporales son una secuencia ordenada de valores de una variable (por ejemplo, temperatura) en intervalos de tiempo igualmente espaciados (por ejemplo, cada hora). Las mediciones que constituyen una serie temporal están ordenadas en una línea de tiempo, lo que revela información sobre patrones subyacentes de la variable que está siendo medida. El orden en la que la data es almacenada es importante, pues existe una dependencia entre el tiempo y las mediciones, y cambiar el orden podría cambiar el significado de los datos.

Las series temporales se pueden utilizar en muchos campos y aplicaciones, por ejemplo:
- Finanzas: seguimiento de los precios de las acciones y análisis de rendimiento financiero
- Climatología: registro de datos meteorológicos y modelado de patrones climáticos
- Ciencia de datos: predicción de valores futuros y anomalías en datos
- Transporte: monitoreo de la salud de camiones y recorrido realizado

## ¿Qué son las bases de datos de series temporales?  (Naqvi et al., 2017)

Una Base de Datos de Series Temporales (TSDB) es un tipo de base de datos optimizado para datos de series temporales o datos marcados con sellos de tiempo. Está diseñada específicamente para manejar métricas, eventos o mediciones que están marcadas con sellos de tiempo, y está optimizada para medir cambios a lo largo del tiempo.

Las principales propiedades que distinguen los datos de series temporales son la sumarización, la gestión del ciclo de vida y las exploraciones extensas de registros. Algunas propiedades clave de una TSDB incluyen:

- Ubicación de Datos: Es crucial para consultas rápidas. Una TSDB coloca datos relacionados en la misma parte física del clúster, permitiendo un acceso rápido.

- Alto Rendimiento de Escritura: Garantizan disponibilidad y rendimiento durante cargas pico, siendo esenciales para registros frecuentes de datos de series temporales.

- Compresión de Datos: Utilizan técnicas eficientes de compresión, especialmente importante a medida que los datos envejecen y la granularidad se vuelve menos crítica.

- Escalabilidad: Diseñadas para manejar rápidos incrementos de datos, ofreciendo mejoras de rendimiento, como altas tasas de inserción y consultas más rápidas.

## Beneficios de las TSDB (DevOps.com, 2022)



- Mediciones de Series Temporales Más Precisas y Significativas:

Una base de datos de series temporales facilita la medición de cómo los conjuntos de datos cambian con el tiempo. Permite ver simultáneamente conjuntos de datos pasados, presentes y futuros para informes más precisos y significativos.

- Almacenamiento Eficiente de Datos:

Debido a la naturaleza de los datos de series temporales, su procesamiento puede requerir grandes cantidades de almacenamiento, lo cual puede ser difícil de gestionar y costoso. Las bases de datos de series temporales tienen herramientas para agregar datos en períodos de tiempo predeterminados y eliminar flujos de datos según sea necesario. También utilizan algoritmos de compresión que optimizan el almacenamiento de datos.

- Consultas de Datos Ultrarrápidas:

Una TSDB facilita la consulta y recuperación de datos basada en períodos específicos. Imagina que no recuerdas el título de un libro que leíste recientemente, pero sabes que fue hace tres meses. Las bases de datos de series temporales pueden ayudarte a descubrir cuál fue el libro sin tener que realizar muchas búsquedas con comodines.

## Referencias

Naqvi, S. N. Z., Yfantidou, S., & Zimányi, E. (2017). Time series databases and InfluxDB. Studienarbeit, Université Libre de Bruxelles, 12.

DevOps. (18 de agosto del 2022). Time Series Database Basics. DevOps.com. Recuperado de https://devops.com/time-series-database-basics/

# Demostración

Video (desde el minuto 2:37): https://drive.google.com/file/d/1VD7OI6uD527f0IZ-XzRF8c6Kk386XDmL/view?usp=drive_link

CSV del video: https://github.com/influxdata/influxdb2-sample-data/blob/master/air-sensor-data/air-sensor-data-annotated.csv

Código del segundo ejemplo:

```python
import psutil

def obtener_datos_de_cpu():
  uso_cpu = psutil.cpu_percent(interval=1)
  return uso_cpu

for i in range (10):
  uso_cpu = obtener_datos_de_cpu()
  print(uso_cpu)

from influxdb_client import InfluxDBClient, Point, WritePrecision
from influxdb_client.client.write_api import SYNCHRONOUS

url = "http://localhost:8086"
token = "{token}"
org = "MiOrganizacion"
bucket = "BucketPrueba"

client = InfluxDBClient(url=url, token=token, org=org)

def crear_point(uso_cpu):
  point = Point("cpu_usage").field("porcentaje_uso_cpu", uso_cpu)
  return point

for i in range (20):
  uso_cpu = obtener_datos_de_cpu()
  print(uso_cpu)
  point = crear_point(uso_cpu)
  write_api = client.write_api(write_options=SYNCHRONOUS)
  write_api.write(bucket=bucket, org=org, record=point)

client.close()
```